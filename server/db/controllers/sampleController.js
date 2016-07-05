import Sample from '../models/sample';
import { getForwardMatchString } from '../utils';

/**
 * List
 */
export function find(req, res) {
  var searchcondition = {};
  // check sql injection
  if( typeof req.body.searchWord === "string" ){
    searchcondition = {
      title: getForwardMatchString(req.body.searchWord)
    };
  }
  else {
    return res.status(500).send();
  }
  Sample.find(searchcondition).exec((err, sampleList) => {
  if (err) {
    console.log('sampleController/find error');
    console.log(err);
    return res.status(500).send();
  }
  return res.status(200).json({sampleList});
  });
}

/**
 * Add
 */
export function add(req, res) {
  const tmpInsertData = new Sample({
    title: req.body.title
  });

  return tmpInsertData.save((saveErr) => {
    if (saveErr){
      console.log("sampleController/add saveErr");
      console.log(saveErr);
      return res.status(500).send(saveErr);
    }
    tmpInsertData.isUpdate = false;
    return res.status(200).json({insertData: tmpInsertData});
  });
}

export default {
  find,
  add
};