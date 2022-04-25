# Imports
import json


# Settings
base_uri = "https://ipfs.io/ipfs/QmcumnkCpFn3gSobLooEzdAK8dNfdBAHXThzbLBH9oFrqC/"
media_extension = ".png"
rareness = ["Obsidian", "Emerald", "Ruby", "Diamond"]
heroes = ["Reaper", "Warrior", "Sourcerer"]
stars = [1, 2, 3]
amount_of_combinations = 4
amount_of_sub_combinations = 3
amount_of_sub_sub_combinations = 3
counter = 0


# Logic
for i in range(amount_of_combinations):
    for j in range(amount_of_sub_combinations):
        for k in range(amount_of_sub_sub_combinations):
            
            base_metadata = {

                "image": base_uri + str(i + 1) + str(j + 1) + str(k + 1) + media_extension,
                "name": rareness[i] + " " + heroes[j],
                "attributes": [

                    {
                        "trait_type": "Stars",
                        "value": stars[k]
                    },

                    {
                        "trait_type": "Heroe",
                        "value": heroes[j]
                    }
                
                ]

            }

            print(base_metadata)

            jsonFile = open("./metadata/" + str(i + 1) + str(j + 1) + str(k + 1) + ".json", "w")
            jsonFile.write(json.dumps(base_metadata))
            jsonFile.close()

            counter = counter + 1

print("Generated Metadatas: " + str(counter))