interface SanityBase  {
    _createdAt: string,
    _id: any,
    _rv: string,
    _updatedAt: string,
}

export interface HeroData extends SanityBase {
    _type: 'Hero',
    designation: string,
    organization: string,
    companyUrl: string,
    resume: {
        asset: any,
        _type: 'file'
    },
    content: any,
    headerDescription: any,
    avatarImage: any

}

export interface AboutData extends SanityBase {
    _type: 'About',
    aboutContent: any,
    skills: [],
}

export interface ExperienceData extends SanityBase {
    _type: 'Experience',
    designation: string,
    company: string,
    location: string,
    start: string,
    end: string,
    present: boolean,
    skills: [],
    description: any
}

export interface ProjectData extends SanityBase {
    _type: 'Projects',
    category: string,
    name: string,
    slug: {
        _type: 'slug',
        current: string
    },
    image: {
        asset: {
            _id: string,
            url: string,
        }
    },
    description: any,
    technologies: []
}