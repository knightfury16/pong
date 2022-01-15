class utility{

    constructor()
    {
        this.play = true;
    }

    static clickStop(canvas_ref)
    {
        canvas_ref.mouseClicked(() => {
            if(this.play){noLoop();this.play = false;}
            else{
                loop();
                this.play = true;
            }
        });

    }


    static frameCount()
    {
        this.div = createDiv("FrameRate = ");
        this.span = createSpan("60");
        this.span.parent(this.div);

        setInterval(() =>{
            let fr = ceil(frameRate());
            this.span.html(fr);
        }, 1000);


    }

    static drawVector(base, vec, myColor){
        push();
        stroke(myColor);
        strokeWeight(3);
        fill(myColor);
        translate(base.x, base.y);
        line(0, 0, vec.x*10, vec.y*10);
        rotate(vec.heading());
        let arrowSize = 4;
        translate(vec.mag()*10 - arrowSize, 0);
        triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        pop();
    }



}