import utils from '@/utils/utils';
import api from '@/api/api';
import { BaseDao } from '@/plateform';
// 数据模型层
export interface Model {
    $store: object;
    num: number;
    msg: string;
    isDisabled: boolean;
}

// 数据操作层
export class DataAccess extends BaseDao {
    private model: Model ;
    constructor(model: Model) {
        super(model.$store);
        // 注入vm对象
        this.model = model;
    }

    public changeNum(): void {
        this.model.num += utils.add(3 , 5);
    }

    public async changeMsg(): Promise<any>  {
        const returnData = await api.get('url');
        this.model.msg += returnData.num;
    }

    public async initData(): Promise<any> {
        this.openMask();
        const returnData = await api.get('url');
        this.model.num += returnData.num;
        this.closeMask();
    }

    public disabledChangedButton(): void {
        this.model.isDisabled = !this.model.isDisabled;
    }
}
