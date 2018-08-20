import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  // jeżeli "ciało zapytania" nie posiada name to error 403 (patrz wyżej), jeśli posiada, to tworzymy newLane na podstawie "ciała zapytania"
  const newLane = new Lane(req.body);

  newLane.notes = [];
  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

// metoda find() bez żadnych parametrów zwróci wszystkie dokumenty z kolekcji lanes
export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}


export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    console.log(lane);

    lane.remove(() => {
      res.status(200).end();
    });
  });
}

export function editLaneName(req, res) {
  Lane.findOneAndUpdate({id: req.body.id}, req.body, {new: true}).exec((err, newlane) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(newlane);
  })
}
