<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/rss">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="channel/title"/></title>
        <link rel="icon" href="/favicon.png" type="image/png"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f8fafc;
            color: #334155;
            line-height: 1.6;
          }
          .header {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            border-left: 4px solid #1e3a8a;
          }
          .header h1 {
            margin: 0 0 10px 0;
            color: #1e3a8a;
            font-size: 2rem;
          }
          .header p {
            margin: 0;
            color: #64748b;
            font-size: 1.1rem;
          }
          .feed-info {
            background: #e0f2fe;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border-left: 4px solid #0ea5e9;
          }
          .feed-info h2 {
            margin: 0 0 10px 0;
            color: #0c4a6e;
            font-size: 1.2rem;
          }
          .article {
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
          }
          .article:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          .article h3 {
            margin: 0 0 15px 0;
            color: #1e3a8a;
            font-size: 1.4rem;
          }
          .article h3 a {
            color: inherit;
            text-decoration: none;
          }
          .article h3 a:hover {
            text-decoration: underline;
          }
          .article-meta {
            color: #64748b;
            font-size: 0.9rem;
            margin-bottom: 15px;
          }
          .article-content {
            color: #475569;
          }
          .article-content p {
            margin: 0 0 15px 0;
          }
          .read-more {
            display: inline-block;
            color: #1e3a8a;
            text-decoration: none;
            font-weight: 500;
            border-bottom: 1px dotted currentColor;
            transition: border-bottom 0.2s ease;
          }
          .read-more:hover {
            border-bottom-style: solid;
          }
          @media (max-width: 768px) {
            body { padding: 15px; }
            .header, .article { padding: 20px; }
            .header h1 { font-size: 1.6rem; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="channel/title"/></h1>
          <p><xsl:value-of select="channel/description"/></p>
        </div>
        
        <div class="feed-info">
          <h2>📡 RSS Feed</h2>
          <p>This is an RSS feed. Copy the URL to subscribe in your favorite feed reader.</p>
        </div>
        
        <xsl:for-each select="channel/item">
          <article class="article">
            <h3>
              <a href="{link}" target="_blank">
                <xsl:value-of select="title"/>
              </a>
            </h3>
            <div class="article-meta">
              Published on <xsl:value-of select="pubDate"/>
            </div>
            <div class="article-content">
              <xsl:value-of select="description" disable-output-escaping="yes"/>
            </div>
            <a href="{link}" class="read-more" target="_blank">Read full article →</a>
          </article>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>