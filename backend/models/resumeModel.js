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
        colorPalette: [string]
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
            startDate: string,
            endDate: string,
        },  
    ],

    skills: [
        {name: string,
            progress:Number,
        },
    ],

    projects: [
        {
            title: string,
            description: string,
            githubLink: string,
            liveDemo: string,
        },
    ],

    certifications: [
        {
            title: string,
            issuer: string,
            year: string,
        },
    ],

    languages: [
        {
            name: string,
            proficiency: number,
        },
    ],
    
    interests: [string],
},
{
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
}
);

export default mongoose.model('Resume', resumeSchema);