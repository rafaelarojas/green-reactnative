from pydantic import BaseModel

class EmailModel(BaseModel):
    email: str

class OTPModel(BaseModel):
    email: str
    otp: str

class ResetModel(BaseModel):
    email: str
    senha: str
