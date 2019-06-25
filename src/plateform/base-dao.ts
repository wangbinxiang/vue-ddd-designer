export class BaseDao {
    private $store: any;
    constructor($store: any) {
        this.$store = $store;
    }

    public closeMask() {
        this.$store.commit('HIDE_MASK');
    }

    public openMask() {
        this.$store.commit('SHOW_MASK');
    }
}

