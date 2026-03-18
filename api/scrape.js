export default async function handler(req, res) {
  try {
    const batchId = req.query.batchId;

    if (!batchId) {
      return res.status(400).json({ error: "batchId required" });
    }

    const url = `https://core.asmultiverse.app/api/v1/selectionway/batch/${batchId}/details`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    const videos = [];

    (data.data || []).forEach(item => {
      const v = item.videoUrl || item.video || item.url;
      if (v) videos.push(v);
    });

    res.status(200).json({ videos });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
