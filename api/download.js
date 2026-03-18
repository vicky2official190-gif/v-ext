export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing video URL");
  }

  // Direct redirect download
  res.setHeader("Content-Disposition", "attachment");
  res.redirect(url);
}
