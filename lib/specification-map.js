module.exports = {
    array: [
       //identify
        {
            tPKey: 'uMember',
            prop: 'member'
        },
        {
            tPKey: 'uGender',
            prop: 'gender'
        },
        {
            tPKey: 'userid',
            prop: 'id'
        },
        {
            tPKey: 'uMil',
            prop: 'mil'
        },

        //page viewed
        {
            tPKey: 'pageType',
            prop: 'pageName'
        },

        //category detail
        {
            tPKey: 'cNae',
            prop: 'category'
        },
        
        //product detail
        {
            tPKey: 'prodid',
            prop: 'product_id'
        },
        {
            tPKey: 'pPrice',
            prop: 'price'
        },
        {
            tPKey: 'pNae',
            prop: 'name'
        },
        {
            tPKey: 'pCt',
            prop: 'category'
        },
        {
            tPKey: 'pBrand',
            prop: 'brand'
        },

        //basket page
        {
            tPKey: 'prodid',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'product_id'
            }
        },
        {
            tPKey: 'pPrice',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'price'
            }
        },
        {
            tPKey: 'pNae',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'name'
            } 
        },
        {
            tPKey: 'pCt',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'category'
            } 
        },
        {
            tPKey: 'pBrand',
            prop: '',
            parsing: {
                type: 'arrayToString',
                key:'brand'
            } 
        },
        {
            tPKey: 'total_value',
            prop: 'value'
        },
        {
            tPKey: 'addTime',
            prop: 'add_time'
        },

        //checkout
        {
            tPKey: 'prodid',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'product_id'
            }
        },
        {
            tPKey: 'pPrice',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'price'
            }
        },
        {
            tPKey: 'pNae',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'name'
            } 
        },
        {
            tPKey: 'pCt',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'category'
            } 
        },
        {
            tPKey: 'pBrand',
            prop: '',
            parsing: {
                type: 'arrayToString',
                key:'brand'
            } 
        },
        {
            tPKey: 'total_value',
            prop: 'value'
        },

        //thank you page
        {
            tPKey: 'prodid',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'product_id'
            }
        },
        {
            tPKey: 'pPrice',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'price'
            }
        },
        {
            tPKey: 'pNae',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'name'
            } 
        },
        {
            tPKey: 'pCt',
            prop: 'products',
            parsing: {
                type: 'arrayToString',
                key:'category'
            } 
        },
        {
            tPKey: 'pBrand',
            prop: '',
            parsing: {
                type: 'arrayToString',
                key:'brand'
            } 
        },
        {
            tPKey: 'total_value',
            prop: 'value'
        },
        {
            tPKey: 'uCoupon', //boolean
            prop: 'isCoupon'
        },
        {
            tPKey: 'uCode',
            prop: 'coupon'
        },
        {
            tPKey: 'pTime',
            prop: 'succes_date'
        }
        
    ]

}
