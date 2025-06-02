from fastapi import APIRouter
from models.otp_models import EmailModel, OTPModel, ResetModel
from services.otp_service import OTPService

router = APIRouter()

otp_service = OTPService()

@router.post("/send-otp")
def send_otp(data: EmailModel):
    return otp_service.send_otp(data)

@router.post("/verify-otp")
def verify_otp(data: OTPModel):
    return otp_service.verify_otp(data)

@router.post("/reset-password")
def reset_password(data: ResetModel):
    return otp_service.reset_password(data)
