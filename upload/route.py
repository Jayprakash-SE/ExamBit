from flask import Blueprint, request, url_for, jsonify, current_app, session
from uuid import uuid4
from random import randint
from werkzeug.utils import secure_filename
import os
from models import UploadLog, db

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

up = Blueprint('upload', __name__, url_prefix='/upload')

# Route to take unique id
@up.route('/getId', methods=['POST'])
def img():
    session["Username"] = "Jayprakash" # This can be change when auth is added
    uid = str( uuid4() )

    # Create entry in database
    uplog = UploadLog(uuid=uid, filename=uid, user=session["Username"])
    db.session.add(uplog)
    db.session.commit()

    # Returning the response
    return jsonify({
        "id": uid,
        "url": url_for('index', _external=True) + 'upload/' + uid
    })

# Route to verifiy the upload files
@up.route('/verfiyUpload', methods=['POST'])
def verfiyUpload():
	uid = request.get_json()["uuid"]
	vcode = request.get_json()["vcode"]

	uplog = UploadLog.query.filter_by(uuid=uid).first()
	if uplog.vercode == int(vcode):
		return jsonify({ 
            "status": "suceess", 
            "msg": "Verified sucessfully",
            "fileurl": url_for('static', filename= "img/" + uplog.filename, _external=True)
        }), 200
	return jsonify({"status": "error", "msg": "Something went wrong!"}), 500

# Route to submit file on unique id
@up.route('/img/<string:id>', methods=[ 'POST'])
def up_img(id):
    if request.method == "POST":
        if 'file' not in request.files:
            return jsonify({"status": "error", "msg": "Didn't find any file in request!"}), 500

        file = request.files['file']
        if file and allowed_file(file.filename):
            fext = file.filename.rsplit('.', 1)[1].lower()
            fname = request.form.get("fileN")
            filename = secure_filename(fname + "." + fext)
            try:
                file.save(os.path.join(
                    current_app.config['UPLOAD_FOLDER'], filename))

                uplog = UploadLog.query.filter_by(uuid=id).first()

                # Check whether it is upload by previous session user
                if uplog.user != session["Username"]:
                    return jsonify({"status": "error", "msg": "Tring to upload by another user!"}), 500

                # Save into database
                uplog.filename = filename
                uplog.uploaded = True
                uplog.vercode = randint(1000, 9999)
                db.session.add(uplog)
                db.session.commit()

                # Returning the reponse
                return jsonify({
					"status": "suceess", 
					"msg": "File uploaded sucessfully",
					"verficationcode": uplog.vercode
				}), 201
            except:
                return jsonify({"status": "error", "msg": "Something went wrong!"}), 500

# https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
