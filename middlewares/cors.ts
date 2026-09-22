import cors from 'cors';


 const allowedOrigins =[
        'http://localhost:3000',
        'http://example.com'
        ]


export const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
           return callback(null, true);
        }
        if (!origin) {
            callback(null, true);
        }

        return callback(new Error('Origin not allowed by CORS'))
        }
    })