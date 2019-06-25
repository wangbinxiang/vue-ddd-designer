import { DataAccess , Model } from './PageTableDao';
import { BaseService } from '@/plateform';
// 服务层
export default class Service extends BaseService {
    private dataAccess: DataAccess;
    constructor(model: Model) {
      super();
      // 注入model
      this.dataAccess = new DataAccess(model);
    }

    public async requireAndRenderDataByPageNo(pageNo: number): Promise<any> {
      this.dataAccess.openMask();
      await this.dataAccess.requiredDataPageDataByPageNp(pageNo);
      this.dataAccess.closeMask();
    }
}

