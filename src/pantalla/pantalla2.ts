import { Container, Graphics, Text } from "pixi.js";
import { SceneBase } from "../game.ts/SceneBase";
import { SceneManager } from "../game.ts/SceneManager";
import { Scene } from "../game.ts/Scene";
import { MenuScene } from "../game.ts/menuScene";
import { Button } from "../game.ts/Button";

export class Ganar extends Container implements SceneBase {
    constructor(ganastePerdiste: string) {
        super();

        const bg = new Graphics();
        bg.beginFill(0x00CCFF, 1);
        bg.drawRoundedRect(0, 0, 600, 400, 50);
        bg.endFill();
        bg.position.set(340, 160);
        this.addChild(bg);

        const text = new Text(ganastePerdiste, { fontFamily: "Arial Black", fontSize: 50, align: "center",lineHeight:80 });
        text.anchor.x = 0.5;
        text.position.set(SceneManager.WIDTH / 2, 230);
        this.addChild(text);

        const btnsalir = new Button("Salir");
        btnsalir.position.set(480, 470);
        btnsalir.on("pointerup", (() => { SceneManager.changeScene(new MenuScene) }));
        this.addChild(btnsalir);

        const btnini = new Button("Reintentar");
        btnini.position.set(800, 470);
        btnini.on("pointerup", (() => { SceneManager.changeScene(new Scene) }))
        this.addChild(btnini);


    }
    update(_deltaFrame: number, _deltaTime: number | undefined): void {
    }
}        