import csv
import json

quotes = []
with open('quotes.csv') as f:
    rows = csv.reader(f)
    for row in rows:
        quotes.append(
            {
                'quote': row[0],
                'meaning': row[1],
                'keywords': row[3] if len(row)>3 else ''
            }
        )

response = {
    "quotes" : quotes
}
with open('quotes.json', 'wb') as f:
    f.write(json.dumps(response,ensure_ascii=False).encode('utf8'))