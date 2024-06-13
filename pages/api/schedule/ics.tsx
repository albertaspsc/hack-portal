import { firestore } from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';
import initializeApi from '../../../lib/admin/init';
import { userIsAuthorized } from '../../../lib/authorization/check-authorization';
import { createEvent } from 'ics';
initializeApi();
const db = firestore();

const SCHEDULE_EVENTS = '/schedule-events';

async function getIcalEvent(req: NextApiRequest, res: NextApiResponse) {
  let event = await db.collection(SCHEDULE_EVENTS).get();
  console.log(event);
  if (event.empty) {
    console.log(event.size);
    console.log(req.query.Event);
  }
  let eventName = '';
  let icalEvents = [];
  event.forEach((e) => {
    let current = e.data();
    if (current.Event != req.query.Event) {
      return;
    }
    eventName = current.title;
    let data = {
      ...current,
      startTimestamp: current.startDate,
      endTimestamp: current.endDate,
      startDate: current.startDate.toDate(),
      endDate: current.endDate.toDate(),
    };
    icalEvents.push(createIcalEvent(data));
  });
  let data = icalEvents[0].value;
  console.log(data);
  res.setHeader('Content-disposition', `attachment; filename=${eventName}.ics`);
  res.setHeader('Content-Type', 'text/calendar').status(200).send(data);
}

function createIcalEvent(event) {
  console.log(event.startDate);
  console.log(event.endDate);
  let eventAttributes = {
    start: [
      event.startDate.getUTCFullYear(),
      event.startDate.getUTCMonth() + 1,
      event.startDate.getUTCDate(),
      event.startDate.getUTCHours(),
      event.startDate.getUTCMinutes(),
    ],
    startInputType: 'utc',
    startOutputType: 'local',
    end: [
      event.endDate.getUTCFullYear(),
      event.endDate.getUTCMonth() + 1,
      event.endDate.getUTCDate(),
      event.endDate.getUTCHours(),
      event.endDate.getUTCMinutes(),
    ],
    title: event.title,
    description: event.description,
    location: event.location,
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
  };
  console.log(eventAttributes);
  return createEvent(eventAttributes);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'GET': {
      return getIcalEvent(req, res);
    }
    default: {
      return res.status(404).json({
        msg: 'Route not found',
      });
    }
  }
}
