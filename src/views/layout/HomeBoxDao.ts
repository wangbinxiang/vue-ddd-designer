import { BaseDao } from '@/plateform';
// 数据模型层
export interface Model {
    $store: object;
    sideWidth: number;
    routers: object;
}

// 数据操作层
export class DataAccess extends BaseDao {
    private model: Model ;
    constructor(model: Model) {
        super(model.$store);
        // 注入vm对象
        this.model = model;
    }

    public toggleSideBar(): void {
        this.model.sideWidth = this.model.sideWidth === 80 ? 280 : 80;
    }

}
