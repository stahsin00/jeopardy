const mongoose = require("mongoose");

export class Song
{
    static Schema = new mongoose.Schema({
            name: this.Name,
            url: this.Url
        });

    static SongModel = mongoose.model("Song", this.getSchema);

    getSchema()
    {
    }

    getModel()
    {
        return mongoose.model("Song", this.getSchema());        
    }

    async save()
    {
        await this.Model.save();
    }

    constructor(name, url)
    {
        this.Name = name
        this.Url = url
        this.Model = new SongModel({name: this.Name, url: this.Url });
    }
}

new Song("SomeTitle", "https://url.com/file.mp3");
