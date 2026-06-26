import requests
from bs4 import BeautifulSoup

url = "https://www.linkedin.com/in/brijmohan-k-10304b418/"

response = requests.get(url)
print("=== Title ===")
print(response)
soup = BeautifulSoup(response.text, "html.parser")

print("=== Headings ===")
for heading in soup.find_all(["h1", "h2", "h3"]):
    print(heading.get_text(strip=True))

print("\n=== Paragraphs ===")
for p in soup.find_all("p"):
    print(p.get_text(strip=True))