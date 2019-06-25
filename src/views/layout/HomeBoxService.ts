import { DataAccess , Model } from './HomeBoxDao';
import { BaseService } from '@/plateform';
// 服务层
export default class Service extends BaseService {
    private dataAccess: DataAccess;
    constructor(model: Model) {
      super();
      // 注入model
      this.dataAccess = new DataAccess(model);
    }

    public toggleSideBar(): void {
        this.dataAccess.toggleSideBar();
    }

}

