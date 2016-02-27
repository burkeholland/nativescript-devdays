class Speaker {
    name: string;
    id: number;
    pic: string;
    bio: string;
    
    constructor(name: string, id: number, pic: string, bio: string) {
        this.name = name;
        this.id = id;
        this.pic = pic;
        this.bio = bio;
    }
}

export default Speaker;