import utils from '@/utils/utils';
import api from './api';
import { BaseDao } from '@/plateform';
// 数据模型层
export interface Model {
    $store: object;
    persons: Person[];
    pageNum: number;
    pageSize: number;
}

export interface Person {
    name: string;
    age: number;
    sex: string;
    address: string;
    phone: string;
}

// 数据操作层
export class DataAccess extends BaseDao {
    private model: Model ;
    constructor(model: Model) {
        super(model.$store);
        // 注入vm对象
        this.model = model;
    }

    public async requiredDataPageDataByPageNp(pageNo: number): Promise<any> {
        this.model.persons = await api.get('', pageNo, this.model.pageSize);
    }
}
