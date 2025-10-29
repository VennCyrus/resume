import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    thumbnaillink: {
        type: String,
    },
    template: {
        theme: String,
        colorPalette: [String]
    },

    profileinfo: {
        name: String,
        email: String,
        phone: String,
        address: String,
        website: String,
        linkedin: String,
        github: String,
        twitter: String,
        facebook: String,
    },

    //WORKLK EXP
    workExperience: [
        {
            company: String,
            role: String,
            startDate: Date,
            endDate: Date,
            description: String
        }   
    ],

    //EDUCATION
    education: [
        {
            degree: String,
            institution: String,
            startDate: String,
            endDate: String,
        },  
    ],

    skills: [
        {name: String,
            progress:Number,
        },
    ],

    projects: [
        {
            title: String,
            description: String,
            githubLink: String,
            liveDemo: String,
        },
    ],

    certifications: [
        {
            title: String,
            issuer: String,
            year: String,
        },
    ],

    languages: [
        {
            name: String,
            proficiency: Number,
        },
    ],
    
    interests: [String],
},
{
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
}
);

export default mongoose.model('Resume', resumeSchema);