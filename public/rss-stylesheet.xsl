<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png"/>
      </head>
      <body>
        <xsl:copy-of select="."/>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>