const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
// map
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
//map
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getModesOfTransport = function () {
//map
  return this.journeys.map((journey) => {
    return journey.transport;
  })
};
// filter
Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return result
};
//filter --> returning correct results but in reverse
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.transport >= minDistance;
  })
  return result
};
// reduce
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function() {
// filter / Set?
  const result = this.journeys.filter((journey) => {
    return journey.transport == [...new Set(journey.transport)];
  })
  return result
}; // something in the lines of only filter, or combo of filter and Set. Cant get it to work the right way


module.exports = Traveller;
