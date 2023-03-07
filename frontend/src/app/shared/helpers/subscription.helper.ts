import { Subscription } from 'rxjs';

export class SubscriptionHelper {
    private subscriptions: Array<Subscription | (() => void)> = [];

    public set next(subscription: Subscription | (() => void)) {
        this.subscriptions.push(subscription);
    }

    public unsubscribeAll(): void {
        this.subscriptions.forEach(item => {
            if (item instanceof Subscription) {
                item.unsubscribe();
            } else if (typeof item === 'function') {
                item();
            }
        });

        this.subscriptions = [];
    }

}
