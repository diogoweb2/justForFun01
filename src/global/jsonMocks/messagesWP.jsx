import MockAdapter from "axios-mock-adapter"; // https://github.com/ctimmerm/axios-mock-adapter
import faker from "faker/locale/en";
import URLSearchParams from "url-search-params";
import { SharepointVars } from "../constants";
import { api } from "../helpers/WebAPI";
import { DateHelper } from "../utils";

export function getFakeItem() {
  return [
    {
      MessageId: faker.random.number(),
      MessageTitle: faker.lorem.sentence(),
      MessagePriority: faker.random.arrayElement(["Normal", "High"]),
      MessageType: "EXPENSE",
      MessageDate: DateHelper.format(faker.date.past(), "YYYY-MM-DD"),
      ActionStatus: faker.random.arrayElement(["READ", "NEW", "HIDDEN"]),
      Sender: faker.name.findName()
    }
  ];
}

function getMocks({ customerId }) {
  let pCustomerId;
  if (customerId) {
    pCustomerId = customerId;
  }
  if (SharepointVars.webAPI(pCustomerId)) {
    const mock = new MockAdapter(api, { delayResponse: 1000 });
    mock.onGet(/\/messagev6\/\d+/).reply(config => {
      const msgID = config.url.split("/")[6];

      return [
        200,
        [
          0,
          "",
          {
            MessageId: msgID,
            MessagePreview: faker.lorem.paragraphs()
          }
        ]
      ];
    });

    mock
      .onGet(
        `${SharepointVars.webAPI()}Customer/${SharepointVars.CustomerId(
          pCustomerId
        )}/messagev6/`
      )
      .reply(() => {
        let mockArray = [];
        let numberOfItems = 10;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("debug_data")) {
          numberOfItems = urlParams.get("debug_data");
        }

        for (let i = 0; i < numberOfItems; i += 1) {
          mockArray = mockArray.concat(...getFakeItem());
        }

        return [
          200,
          [
            0,
            "",
            mockArray,
            {
              setup: {
                Sortby: "MessageDate", // newField
                SortByDesc: true // newField
              }
            }
          ]
        ];
      });
  }
}

export default getMocks;
