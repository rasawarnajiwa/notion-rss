(async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: { equals: "publik" }
      },
      sorts: [{ property: "Tanggal Publikasi", direction: "descending" }]
    });

    console.log("📄 Jumlah hasil dari Notion:", response.results.length);

    const items = response.results.map((page) => {
      const title = page.properties["Judul"].title[0]?.plain_text || "Tanpa Judul";
      const link = page.properties["Link"]?.url || "";
      const description = page.properties["Deskripsi"].rich_text[0]?.plain_text || "";
      const date = page.properties["Tanggal Publikasi"].date?.start || new Date().toISOString();

      return `
<item>
  <title>${title}</title>
  <link>${link}</link>
  <description><![CDATA[${description}]]></description>
  <pubDate>${new Date(date).toUTCString()}</pubDate>
  <guid>${link}</guid>
</item>`;
    });

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Rasa Warna Jiwa</title>
  <link>https://rasawarnajiwa.github.io</link>
  <description>Catatan rasa, refleksi, dan arah batin.</description>
  <language>id-ID</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items.join("\n")}
</channel>
</rss>`;

    fs.writeFileSync("rss.xml", rss);
    console.log("✅ rss.xml berhasil dibuat:", rss.length, "karakter");

  } catch (error) {
    console.error("❌ Gagal membuat RSS:", error.message);
  }
})();
