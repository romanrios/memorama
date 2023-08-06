import {Container, Sprite, Text} from "pixi.js";
import { KeyBoard } from "../util/keyboard";

export class UIDemo extends Container{
    constructor(){
        super();
        const dialog = new Container();
            dialog.x=100;
            dialog.y=50;
            this.addChild(dialog);
        const background = Sprite.from("ventana");
            background.scale.set(0.5);
            this.addChild(background);
        const buttonMouse =Sprite.from("mouse");
            buttonMouse.anchor.set(0.5);
            buttonMouse.scale.set(0.1);
            buttonMouse.x= 100;
            buttonMouse.y=180;
            buttonMouse.on("mousedown",this.onMouseDown,this);
            buttonMouse.on("mouseup",this.onMouseUp,this);
            buttonMouse.interactive=true;
            this.addChild(buttonMouse);
        const buttonTouch=Sprite.from("touch");
            buttonTouch.anchor.set(0.5);
            buttonTouch.scale.set(0.1);
            buttonTouch.x=200;
            buttonTouch.y=180;
            buttonTouch.on("touchstart",this.onTouchStart,this);
            buttonTouch.on("touchend",this.onTouchEnd,this);
            buttonTouch.interactive=true;
            this.addChild(buttonTouch);
        const buttonPointer =Sprite.from("pointer");
            buttonPointer.anchor.set(0.5);
            buttonPointer.scale.set(0.1);
            buttonPointer.x=300;
            buttonPointer.y=180;
            buttonPointer.on("pointerdown",this.onPointerDown,this);
            buttonPointer.on("pointerup",this.onPointerUp,this);
            buttonPointer.interactive=true;
            this.addChild(buttonPointer);
        const lastKeyPressed:Text = new Text("Waiting...",{fontSize:48, fill:0xFFFFFF});
            lastKeyPressed.anchor.set(0.5);
            lastKeyPressed.x = 100;
            lastKeyPressed.y = 300;
            this.addChild(lastKeyPressed);
            KeyBoard.down.on("KeyB",this.onKeyB, this);
            KeyBoard.up.on("KeyB", this.onKeyBup, this);
           
    }
 private onMouseDown():void{
    console.log("mouse down");
 }
 private onMouseUp():void{
    console.log("mouse up");
 }
 private onTouchStart():void{
    console.log("touch down");
 }
 private onTouchEnd():void{
    console.log("touch up");
 }
 private onPointerDown():void{
    console.log("pointer down");
 }
 private onPointerUp():void{
    console.log("pointer up");
 }
 private onKeyB():void{
    console.log("aprete la B", this);
}
private onKeyBup():void{
    console.log("solte la B", this);
}
}