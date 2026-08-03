/**
 * @description       : Memory Game LWC Component
 * @author            : Mohammed Mahimood
 * @group             :
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
 **/
import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import Font_Awesome from '@salesforce/resourceUrl/fontawesome';
import LightningAlert from 'lightning/alert';

export default class MemoryGameLwc extends LightningElement {

    isLoaded = false;
    openedCards = [];
    matchedCard = [];
    timerRef;
    totalTime = '00:00';
    moves = 0;

    cards = [
        { id: 1, listCard: 'card', type: 'bike', icon: 'fa-solid fa-motorcycle' },
        { id: 2, listCard: 'card', type: 'fighterjet', icon: 'fa-solid fa-fighter-jet' },
        { id: 3, listCard: 'card', type: 'bug', icon: 'fa-solid fa-bug' },
        { id: 4, listCard: 'card', type: 'anchor', icon: 'fa-solid fa-anchor' },
        { id: 5, listCard: 'card', type: 'heart', icon: 'fa-solid fa-heart' },
        { id: 6, listCard: 'card', type: 'ship', icon: 'fa-solid fa-ship' },
        { id: 7, listCard: 'card', type: 'trophy', icon: 'fa-solid fa-trophy' },
        { id: 8, listCard: 'card', type: 'wrench', icon: 'fa-solid fa-wrench' },
        { id: 9, listCard: 'card', type: 'fighterjet', icon: 'fa-solid fa-fighter-jet' },
        { id: 10, listCard: 'card', type: 'bug', icon: 'fa-solid fa-bug' },
        { id: 11, listCard: 'card', type: 'anchor', icon: 'fa-solid fa-anchor' },
        { id: 12, listCard: 'card', type: 'heart', icon: 'fa-solid fa-heart' },
        { id: 13, listCard: 'card', type: 'ship', icon: 'fa-solid fa-ship' },
        { id: 14, listCard: 'card', type: 'trophy', icon: 'fa-solid fa-trophy' },
        { id: 15, listCard: 'card', type: 'wrench', icon: 'fa-solid fa-wrench' },
        { id: 16, listCard: 'card', type: 'bike', icon: 'fa-solid fa-motorcycle' }
    ];

    displayCard(event) {
        const currentCard = event.currentTarget;
        currentCard.classList.add('open', 'show', 'disabled');
        this.openedCards = this.openedCards.concat(currentCard);

        if (this.openedCards.length === 2) {
            this.moves++;

            if (this.moves === 1) {
                this.timer();
            }

            const firstCardType = this.openedCards[0].getAttribute('type');
            const secondCardType = this.openedCards[1].getAttribute('type');

            if (firstCardType === secondCardType) {
                this.matchedCard = this.matchedCard.concat(
                    this.openedCards[0],
                    this.openedCards[1]
                );
                this.matched();
            } else {
                this.unmatched();
            }
        }
    }

    matched() {
        this.openedCards[0].classList.add('matched');
        this.openedCards[1].classList.add('matched');

        this.openedCards[0].classList.remove('unmatched');
        this.openedCards[1].classList.remove('unmatched');

        this.openedCards = [];

        if (this.matchedCard.length === 16) {
            window.clearInterval(this.timerRef);
            this.showWinPopup();
        }
    }

    async showWinPopup() {
        await LightningAlert.open({
            message: `Congratulations! You won the game in ${this.moves} moves with a time of ${this.totalTime}!`,
            label: 'Winner 🎉',
            theme: 'success', 
        });

        this.shuffle();
    }

    unmatched() {
        this.openedCards[0].classList.add('unmatched');
        this.openedCards[1].classList.add('unmatched');

        this.action('DISABLE');

        setTimeout(() => {
            this.openedCards[0].classList.remove('show', 'open', 'unmatched');
            this.openedCards[1].classList.remove('show', 'open', 'unmatched');

            this.action('ENABLE');
            this.openedCards = [];
        }, 1100);
    }

    action(action) {
        const cards = this.template.querySelectorAll('.card');

        Array.from(cards).forEach(card => {
            if (action === 'ENABLE') {
                const isMatched = card.classList.contains('matched');
                if (!isMatched) {
                    card.classList.remove('disabled');
                }
            }

            if (action === 'DISABLE') {
                card.classList.add('disabled');
            }
        });
    }

    timer() {
        const startTime = new Date();

        this.timerRef = setInterval(() => {
            const difference = new Date().getTime() - startTime.getTime();
            const totalSeconds = Math.floor(difference / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            this.totalTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    shuffle() {
        this.openedCards = [];
        this.matchedCard = [];
        this.totalTime = '00:00';
        this.moves = 0;
        window.clearInterval(this.timerRef);

        const elements = this.template.querySelectorAll('.card');
        Array.from(elements).forEach(card => {
            card.className = 'card'; 
        });

        const shuffledCards = [...this.cards];
        let counter = shuffledCards.length;

        while (counter > 0) {
            const index = Math.floor(Math.random() * counter);
            counter--;
            const temp = shuffledCards[counter];
            shuffledCards[counter] = shuffledCards[index];
            shuffledCards[index] = temp;
        }

        this.cards = [...shuffledCards];
    }

    renderedCallback() {
        if (this.isLoaded) {
            return;
        }

        loadStyle(this, Font_Awesome + '/css/fontawesome.css')
            .then(() => {
                return loadStyle(this, Font_Awesome + '/css/solid.css');
            })
            .then(() => {
                console.log('Font Awesome loaded successfully!');
                this.isLoaded = true;
            })
            .catch(error => {
                console.error(error);
            });
    }
}