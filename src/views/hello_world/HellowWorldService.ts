import { DataAccess , Model } from './HellowWorldDao';
import { BaseService } from '@/plateform';
// 服务层
export default class Service extends BaseService {
    private dataAccess: DataAccess;
    constructor(model: Model) {
      super();
      // 注入model
      this.dataAccess = new DataAccess(model);
    }

    public changeNum(): void {
      this.dataAccess.changeNum();
    }

    public async changeMsg(): Promise<any> {
      this.dataAccess.openMask();
      this.dataAccess.disabledChangedButton();
      await this.dataAccess.changeMsg();
      this.dataAccess.closeMask();
    }

    public initData(): void {
      this.dataAccess.initData();
    }
}

