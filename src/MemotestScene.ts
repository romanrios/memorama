import { Container, Sprite, Texture } from "pixi.js";



export class MemotestScene extends Container {
    private COLUMNAS: number = 4;
    private SEPARACION_X: number = 110;
    private SEPARACION_Y: number = 110;
    private TABLERO_X: number = 100
    private TABLERO_Y: number = 20
    private FICHAS: string[] = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
    
    private selectedCard: CardSprite | null = null;
    private isChecking: boolean = false;

    constructor() {
        super();
        // Duplicar las cartas para crear parejas
        this.FICHAS = [...this.FICHAS, ...this.FICHAS];

        this.shuffleCards();
        this.createCardSprites();
    }

    private shuffleCards() {
        for (let i = this.FICHAS.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [this.FICHAS[i], this.FICHAS[randomIndex]] = [this.FICHAS[randomIndex], this.FICHAS[i]];
        }
    }

    private createCardSprites() {
        // Recorre arreglo cards y crea sprites por cada carta
        this.FICHAS.forEach((cardName, i) => {
            const cardSprite = new CardSprite();
            cardSprite.textureName = cardName;
            cardSprite.interactive = true;
            cardSprite.cursor = "pointer";

            cardSprite.on('pointerdown', () => this.onCardClicked(cardSprite));

            const row = Math.floor(i / this.COLUMNAS);
            const col = i % this.COLUMNAS;
            cardSprite.position.set(col * this.SEPARACION_X + this.TABLERO_X, row * this.SEPARACION_Y + this.TABLERO_Y);

            this.addChild(cardSprite);
        });
    }

    private onCardClicked(cardSprite: CardSprite) {
        if (this.isChecking || cardSprite.isFlipped) {
            // Si ya estamos comprobando o la carta ya está dada vuelta, no hacer nada
            return;
        }

        cardSprite.isFlipped = true;
        cardSprite.texture = Texture.from(cardSprite.textureName);

        if (!this.selectedCard) {
            // Si es la primera carta seleccionada
            this.selectedCard = cardSprite;
        } else {
            // Si es la segunda carta seleccionada
            this.isChecking = true;
            setTimeout(() => {
                if (this.selectedCard!.textureName === cardSprite.textureName) {
                    // Si las cartas son iguales, desaparecen
                    this.removeChild(this.selectedCard!);
                    this.removeChild(cardSprite);
                } else {
                    // Si las cartas no son iguales, las volvemos a dar vuelta
                    this.selectedCard!.isFlipped = false;
                    cardSprite.isFlipped = false;
                    const cardbackTexture = Texture.from('cardback');
                    this.selectedCard!.texture = cardbackTexture;
                    cardSprite.texture = cardbackTexture;
                }

                this.selectedCard = null;
                this.isChecking = false;
            }, 1000); // Esperamos 1 segundo para mostrar las cartas antes de volver a dar vuelta
        }
    }

    update(_deltaTime: number, _deltaFrame: number) {
        // update
    }
}



// Clase personalizada que extiende Sprite y agrega la propiedad textureName
class CardSprite extends Sprite {
    textureName: string = "";
    isFlipped: boolean = false;

    constructor() {
        super(Texture.from('cardback'));
    }
}