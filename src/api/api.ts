export default {
    get(url: string ): Promise<ReturnData> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({num: 2});
            }, 500);
        });
    },
};

interface ReturnData {
   num: number;
}


