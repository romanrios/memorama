
import { Sprite, TextStyle, Text } from "pixi.js";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "./SceneManager";
import { Scene } from "./Scene";
import { Button } from "./Button";

export class MenuScene extends SceneBase {

    public update(): void { }
    constructor() {
        super();
        const bg = Sprite.from("santafe");
        bg.width = SceneManager.WIDTH;
        bg.height = SceneManager.HEIGHT;
        this.addChild(bg);

        const tstyle = new TextStyle({
            align: "center",
            dropShadowAlpha: 0,
            dropShadowBlur: 8,
            fill: [
                "#3e7984",
                "#f70808"
            ],
            fillGradientType: 1,
            fontFamily: "Arial Black",
            fontSize: 90,
            fontWeight: "bold",
            lineJoin: "round",
            stroke: "#f7f3f3",
            strokeThickness: 12
        });

        const texto = new Text("Santa MEMO Fe", tstyle);
        texto.anchor.set(0.5);
        texto.position.set(SceneManager.WIDTH / 2, SceneManager.HEIGHT / 2);
        texto.scale.set(1);
        this.addChild(texto);

        const btnsalir = new Button("Fullscreen");
        btnsalir.position.set(500, 500);
        btnsalir.on("pointerup", () => {
            if (!document.fullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }
        );
        this.addChild(btnsalir);

        const btnini = new Button("Comenzar");
        btnini.position.set(750, 500);
        btnini.on("pointerup", this.goToGame, this);
        this.addChild(btnini);
    }
    private goToGame() {
        setTimeout(() => {
            SceneManager.changeScene(new Scene);
        }, 100)
    }
}