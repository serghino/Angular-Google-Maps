export class Marker {
    public title = 'Fake title';
    public description  = 'Fake description';
    constructor(public lat: number, public lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
