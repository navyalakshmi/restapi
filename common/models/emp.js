'use strict';

module.exports = function(Emp)
{
    // Emp.getEname=function(eid,callback)
    // {
    //     console.log(eid);
    //     Emp.findById(eid).then(res => {
    //         {
    //         console.log('response',res);
    //         callback(null, res);
    //        }
    //      }).catch(err => {
    //       callback(err,null);
    //    });
    // }
    // Emp.remoteMethod(
    //     'getEname',
    //     {
    //         returns: { root: true, type: 'object' },
    //         accepts: [{
    //             arg: 'eid',
    //             type: 'number',
    //             required: false,
    //             http: {
    //                 source: 'query'
    //             }
    //         }],
    //         http: { path: '/getEname', verb: 'get' },
    //     }
    //  );
     
     Emp.postEname = function (data,callback)
     {
         console.log(data);
        Emp.create(data).then(res => {
        
            console.log('response',res);
            callback(null, res);
         }).catch(err => {
          callback(err,null);
       });
     }
     Emp.remoteMethod(
         'postEname',
        {
         returns: { root: true, type: 'object' },
         accepts: [{
               arg:'data',
               type:'Object',
               reuired:true,
             http: {
                 source: 'body'
             }
             }],
         http: { path: '/postEname', verb: 'post' },
     }
  );

//   Emp.upsert = function (data,callback)
//      {
//          console.log(data);
//         Emp.upsert(data).then(res => {
        
//             console.log('response',res);
//             callback(null, res);
//          }).catch(err => {
//           callback(err,null);
//        });
//      }
//      Emp.remoteMethod(
//          'upsert',
//         {
//          returns: { root: true, type: 'object' },
//          accepts: [{
//                arg :'data',
//                type:'object',
//                required:true,
//              http: {
//                  source: 'body'
//              }
//              }],
//          http: { path: '/upsert', verb: 'put' },
//      }
//   );


  //update using attributes
  Emp.updateAll = function (eid,data,callback)
     {
         console.log(data);
        Emp.updateAll(eid,data).then(res => {
        
            console.log('response',res);
            callback(null, res);
         }).catch(err => {
          callback(err,null);
       });
     }
     Emp.remoteMethod(
         'updateAll',
        {
         returns: { root: true, type: 'object' },
         accepts: [{
               arg:'eid',
               typr:'string',
               required:true,
               arg :'data',
               type:'object',
               required:true,
             http: {
                 source: 'body'
             }
             }],
         http: { path: '/updateAll', verb: 'put' },
     }
  );

  Emp.destroyById= function (eid,callback)
     {
         
        Emp.destroyById(eid).then(res => {
        
            console.log('response',res);
            callback(null, res);
         }).catch(err => {
            console.log('err ->> ',err);
          callback(err,null);
       });
     }
     Emp.remoteMethod(
         'destroyById',
        {
         returns: { root: true, type: 'object' },
         accepts: [{
               arg:'eid',
               type:'number',
               required:true,
               
             http: {
                 source: 'query'
             }
             }],
         http: { path: '/destroyById', verb: 'delete' },
     }
  );

  Emp.getEname= function ({ename},callback)
     {
         
        Emp.findOne({ename}).then(res => {
        
            console.log('response',res);
            callback(null, res);
         }).catch(err => {
            console.log('err ->> ',err);
          callback(err,null);
       });
     }
     Emp.remoteMethod(
         'getEname',
        {
         returns: { root: true, type: 'object' },
         accepts: [{
               arg:'eid',
               type:'number',
               required:true,
               arg:'ename',
               type:'string',
               required:true,
               
             http: {
                 source: 'query'
             }
             }],
         http: { path: '/getEname', verb: 'get' },
     }
  );
  Emp.getEname= function ({ename},callback)
     {
         
        Emp.getIdName({ename}).then(res => {
        
            console.log('response',res);
            callback(null, res);
         }).catch(err => {
            console.log('err ->> ',err);
          callback(err,null);
       });
     }
     Emp.remoteMethod(
         'getEname',
        {
         returns: { root: true, type: 'object' },
         accepts: [{
               arg:'eid',
               type:'number',
               required:true,
               arg:'ename',
               type:'string',
               required:true,
               
             http: {
                 source: 'query'
             }
             }],
         http: { path: '/getEname', verb: 'get' },
     }
  );
};

   