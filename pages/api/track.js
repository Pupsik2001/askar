// pages/api/track.js

import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { tracking_number } = req.body;

  const url = "https://smartex.kg/?page=track";

  try {
    const response = await axios.post(url, `trackingfortrack=${tracking_number}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const $ = cheerio.load(response.data);

    const progressBar = $(".progress-bar");
    const status = progressBar.text().trim() || "В нашей базе нет информации об этом трекинге!";
    const information = [];

    if (progressBar.length > 0) {
      const rows = $("table.table tr");

      rows.each((index, element) => {
        const columns = $(element).find("td");

        if (columns.length === 2) {
          const event = columns.eq(0).text().trim();
          const info = columns.eq(1).text().trim();
          information.push({ event, info });
        }
      });
    }

    let result = {
      status: `Статус: ${status}`,
      information,
    };

    res.status(200).json(result);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error("Error: Что-то пошло не так");
    res.status(500).send("Internal Server Error");
  }
}
