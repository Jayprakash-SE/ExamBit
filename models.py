from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class UploadLog(db.Model):
    __tablename__ = "uploadlog"

    id = db.Column( db.Integer, primary_key= True )
    uuid = db.Column( db.String(30), nullable= False, unique= True)
    filename = db.Column( db.String(35), nullable= False, unique= True)
    user = db.Column( db.String(30), nullable= False)
    uploaded = db.Column( db.Boolean, default= False)
    vercode = db.Column( db.Integer, default=0 )