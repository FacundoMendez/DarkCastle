import json
from venv import create

def create_metadata(base_uri, rareness_amount, stars_amount, type_amount):
    for i in range(rareness_amount):
        for j in range(type_amount):
            for k in range(stars_amount):

                new_meta = {
                    "image": base_uri + str(i) + str(j) + str(k) + ".png"
                }

                with open(f'./metadata/{str(i) + str(j) + str(k)}.json', 'w') as outfile:
                    json.dump(json.dumps(new_meta), outfile)

create_metadata("https://gateway.pinata.cloud/ipfs/Qmbs9Lzca2XXuAo35ufPiH9fBN9jdKPny3UsLUzTVHVKnD/", 4, 3, 3)