import { Request, Response, NextFunction } from 'express';


export const paginateResults = (req: Request, model:any) => {

    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    let results = {
        next: {},
        previous: {},
        results: []
    };

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
 

    if (endIndex < model.length) {
     
        results.next = {
          page,
          limit
 
       };
    };

    if (startIndex > 0) {
     
        results.previous = {
          page: page - 1,
          limit
 
       };
    };

    results.results = model.slice(startIndex,endIndex);

    return results;
}