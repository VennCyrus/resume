import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
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

    profileInfo: {
        fullName: String,
        designation: String,
        summary: String,
        profilePreviewUrl: String,
        profileImg: String,
        previewUrl: String,
    },

    contactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        website: String,
    },

    //WORK EXPERIENCE
    workExperience: [
        {
            company: String,
            role: String,
            startDate: String,
            endDate: String,
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
        {
            name: String,
            progress: Number,
        },
    ],

    projects: [
        {
            title: String,
            description: String,
            github: String,
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
            progress: Number,
        },
    ],
    
    interests: [String],
},
{
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
}
);

export default mongoose.model('Resume', resumeSchema);