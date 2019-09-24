export class counterService{
    inactiveCount: number = 0;
    activeCount: number = 0;

    getInactiveCount(){
        return this.inactiveCount;
    }

    getactiveCount(){
        return this.activeCount;
    }

    countInactive(){
        this.inactiveCount++;
    }

    countActive(){
        this.activeCount++;
    }
}