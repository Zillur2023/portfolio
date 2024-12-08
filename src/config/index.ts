

export default { 
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    client_url:process.env.CLIENT_URL,
    server_url:process.env.SERVER_URL,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
    store_id:process.env.STORE_ID,
    signeture_key: process.env.SIGNETURE_KEY,
    payment_url: process.env.PAYMENT_URL,
    payment_verify_url:process.env.PAYMENT_VERIFY_URL,
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
    send_email_secret: process.env.SEND_EMAIL_SECRET
  };