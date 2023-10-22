import { Container, Sprite } from "pixi.js";

export class Card extends Container {

    card: Sprite;
    queCartaEs: string;
    back: Sprite;

    constructor(sprite: string) {
        super();

        const TAMAÑO = 130;

        this.queCartaEs = sprite;

        this.card = Sprite.from(sprite);
        this.card.height = TAMAÑO
        this.card.width = TAMAÑO;
        this.card.anchor.set(0.5);
        this.card.visible = false;
        this.addChild(this.card);

        this.back = Sprite.from("back");
        this.back.height = TAMAÑO
        this.back.width = TAMAÑO;
        this.back.anchor.set(0.5);
        this.back.visible = true;
        this.addChild(this.back)

        this.on("mouseover",(()=>this.scale.set(this.scale.x*1.03)));
        this.on("mouseout",(()=>this.scale.set(this.scale.x/1.03)));
    }


    darVuelta() {
        if (this.card.visible == true) {
            this.card.visible = false;
            this.back.visible = true;
        }
        else {
            this.card.visible = true;
            this.back.visible = false;
        }
    }
}


