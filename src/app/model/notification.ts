export class Notification{

    private _data;
    constructor(notification:any){
        this._data = notification;
    }

    toArray():Array<any> {
        var arr = []
        if(typeof this._data['$value'] !='undefined' )
            return arr;
        for(var key in this._data) {
            if(key != "$key")
            {
                this._data[key].$key = key
                arr.push(this._data[key])
            }
        }
        return arr;
    }

}