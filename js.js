$(document).ready(function () {
    let json = `
        {
        "users": [
             {
                "id":7,
                "name": "bob",
                "surname":"bobr",
                "photo_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0oXn3yqUHmNFAzL4-FpRDyR1FulQr16qgA&s",
                "balance": 52.1488
             },
            {
                "id": 10,
                "name": "Bronislav",
                "surname": "sigmovich",
                "photo_url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAwACBAUGB//EAD0QAAEEAQMDAgMDCgMJAAAAAAEAAgMREgQhMRNBUQVhInGBMpGhBhQjQlKxwdHh8HKT8RUWM0NTYmOCkv/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EAB4RAQEBAQEAAwEBAQAAAAAAAAABERICAxMhMVFB/9oADAMBAAIRAxEAPwDtYogJ3SKmBXN9jVFKV8CiGlIUxQxKbijShsKoo7pmKmKQVShGybgpgpM9UimliGCiWoFcsQwSEpGgjipRUEwvhQx0iLCsCpn9K6ZQMZT7RUtZcSOUKK1FoPZVwHhK6Z6RCaWquCl0oor4IYpw66PS9kOl7J6K5r9ZjEgYlqpSlBkMRQMZWyh4QLR4UdZMUKWkxjwgYgnVrPSNJ3T9lUsVq0rFTBNwQIKlpRYhgmqKWldNTBNUUtKwUwTdigUonFGkykKUsUUViECrVilKUrIJGApQRKFplWNnUU6vus2SmS4vRy1dRHqrJkpkkcRr6oU6oWXJDJWjiNXVQ6oWbJDJI4jX1Qh1AsuSmShw0mQIZhZ8kM0rg5zwq5pJdaFqXJ2aGaVaFqHJ4kRztZrUDkrGnJDJIy91MvdBw4uQLkkuQLknDrQtKyUyUsXJQBVckCVLF8kckq0bWcdNMBRtLtG0YV1FW0bVjWDSiraNqGDaGQUJ2VbSFrQtC0C5IuLWhaoXDupkOyQugq5KWrAsVW0CUCaTgElS1XK0LTgWJQtUtQlOLV7UtLLkMlYNNtQlKyUyVytMyUySc1M1cjs7NHNIzUyTyez80eos2SOSOF9jTmjmsuamauD9rVkgXLPmpmrhX5IY++x3VKf+0hmpmtcs30OLu5V2ikvNTNXLOwwlVv3pVzUzRi6XB97UJVM7Vck4ujLUJSy5VJTyujSUCUu0Mk8jqLkqWllyhcqRm+lyULS8lMlrkdL5KWqoJ5c+lskMkEFrldrWpaqqhwJoEWOyuR2valqhKF7q5HZmSmSWTsqkp5HZuSmaTaGSuWb8lPMiHUSbUJTyPsNMinUSbQtPMH2n9RTqJFqWrlfaf1EOok2gSngfaf1EOok2gSrlfacX2pmlByBKuR9p2SmSTamSuV9rQ7UxdURdVuR7fzQfqY4wQ54sd15rRudK2QQHFzdjn3I/j7/vRfG9lRue7zb3fart+KeGL81dWHWyyyfaGDuAtI1GWQPw3QAXD0cb4ZnNt+IG9nb6b7rfodZFNvRBa6vi2ta5cu/TWATG5uZsH8U78z6sTpmW2RjTi4H67qsBY97qcCBuSN6XQtvSDQ0uB2I4v5+yzY3La81pvWnObcrASPteVvGuiwvffkFvCmu/J2B0bpHOdA27aB59gvPa0auB5a3JzYxRN7kpklZvv15/r0EOtgmf02PGQ/VK0rxeU0kVgEPbuR+z8iuzpfWZG6XPVxtc9u7qdRcB3ryrlrz8rtcqUrNacdjY7EDkKwjdwWn7lY6f0sjZClqbDfIUbEB8Lu/dCsZFD47qgmMkz2Mb8LDRy5KMkrWV1Nm3V+63HO/gqITTRwtt+49t1WKWOZoMRJHuFYNWURHClKwaBQRrelKTiBClYoKxkFFaiOyFWrA8/HO7Q18DL4pw5K3w6iDVNJkETXDYsIGzv7+q5/qsE7BQZJK07h4/iAleng4sBdjjxfH8FK13ooY+n+jLwOyczQte4ZPeSXWN7SvTYz0wLLibo/0XSjGIa3JpI7hShkMbYWDFjQSa+afE6w8x0S37Qv8ABJc9uJLmbAH5ri6mWSUkB7hBXTDYyeT+JWG5+Nmu1jNTi1xEcoPw2aBI8LDq2ieDnGRjhxyAuPPpJHTxdFsrXg7uvfnddJof0w4giUGiDuT9y3I5+rrNrdNgabGxznN3uyFxp3zvjJlyIiGJcWloHtt3/Bekd8biXMIwZi5h5/Fcj1aFr4nyYYyNILgDsPomM38dP0n1/SRaSKOd7y+MBmTRYcK2PnjldyL1HSSsa+KVtHvwvB6WF0cj4XgNdtg7/u5C6Wmge+VrSC3u9rXcHyq+dbny+o9gNVGQDlY80l+pakxaJr4JGmWY4xBpyIJ9uy4GmfPH6gQ0VGWUW38N+VeKeWDV5xODZdnDEfwWL5dJ8v8ArpS+lP8ATIdPG8xO107SSZG2Im+19z/BVbqGUWTRuDS6gXN5+YO6zT+qu1k+oExdIap7xWQ23rha9K3TzQhjJRKDy55v+S1581j162/ivqDTG1j2MLmjY4tuvos0bpYadJFQePhscldCSOWJrfzch3z7KsPqB6jotVCWSAkCjdjsnGdIhe6R4wfbnfaa7bA/RMc8xBvWaYi92IaSN/dK1LOtqgI9RG2tnsBxI8LQ+A9Vr3yZgNDcSrDpYmaXdIuxkI4I4TA1DX6dsr2sYenIG7EdwmQQuaxrZZQ48ZFKlUxTDpZnxtdGWMbfxOffHstkenga79LLmRvQ2pMkmD2ti0+GLTv3I9li2ukwiOKHTsa9zWve/YBwuz7AJw0Rktzo4Ij+yXGwrFzRuN77jshbTzgfelnKdjzHpWvk1Mj4pYQHNrdpsFa5ugJHxywCnuu+w99lo0Pp8Omc+QD4n7/Jb2sJ2aK+YW3GEQQMYxohGzu/hTUQsYA5r2s7ZE878LV1I4hRczKrDXHevkubNqous55leAzYNDNmlRX108h08cenrpvPxFw+0ss0McT4WvwhAPxOB3J8Ba+sYdOyeR4BIHTY4gWT3/Fc6PTSayUF1jEA24EC+BY8qSujngcZooSC4PLg2+xK6UTYm1sA5x2XHfpo2eqdTTkghoa+m1fY8rrwROiiJyLi0bE82oT9ZfW9IJTFI7YAYl9/gfZc64tRemfI0PoEFo5Arb8V6CRjW6R7pHEBrciXG/vXE1bOjE2R5yLXA5tGxBHB+lqlPqfjl+o6WQSvIcWyNbs7sSNv5I6CczPb1xi4DF21WV0RqI5zIzfagT3ojY/LkeUj82Am6jd2u2eCdj7/ADW3IHa2Qy3E1tsslpO9KzXO1scDw3E5b4n702fRNlBdGKkdse2QQ9MDdOwwh27TeHdvlWFzmSwRy6mKSyLGTR3FnlbI9fp42Ma53wMbTGAVQod/qFTX+nhupMsV1LQIvnuly+nPk07G6ZjXBjz1LdQICsWuvotW5wPTNN/WyN0rajWRmZ7XDHpgDqHuvM6bVvg1Akjvc42DsefwWpzXmaN+oxxfsDd0T5Vi11s9FqpZI3tAe4je6vZdCEOjaGOcXBvleW1YY3WMjZIQ6xd7Y+y6mh10ml+HW5dLKmOPJ9/kpO58TmggjIeU4AFvG6ymdlFzS13+FwNqdbKLMbfvVi1tDQWkEg3yrtDbPAFeKWSFxIyys+6cKxtwyJ89lmx080o6jMuh0kb3Oa2r4aDstEMbZGW2dhINOx33VNU0yafoMfg59cc13XC1cOtdMW6eJ7I47ZTHgDYoxp6FrQpqJhpoJJHBzsG3i3k+yIrysWuZqJJcYnOAwprmCyD334+9axzlcgzt1moOrml/N3xtxLti1l9v6rr6D0+FunMzmSSFzbxe68/HjlatHpI9PAIz+kNfE94FuPumamRzIXmMnNrbFC9/l3QXOlk6E7ZNW0OlJpsMdERjn6lZvUfUvhYOnMXPc6mhvw33J9griTW6hkRbpmi3b5mi0Hm6rb+6TNNFBMBrpozHiC2OMmg0XsaHN7m/dWLWX0sGSaSV8LWgN2OW9nkUuxHGCxu9d0iKKNoYI20wA4g8n3PkrVqJotFpXTajZjOx7lRi8h07Y+jNT5HC+mOSPf2+a52tigma6DptDW8OOzWX7Df/AEC5/pWpMxnnle/OU24C/o3jdbdTNDHC2aVzW5H4PrtXuUSYbfx5t7zoZ3Vi9rTiXDuL42+d2Frj1MGoeWMlDZvfn6+fos2nnik15ili/RTfDi529XQv+awanQ6vSSvkYxzo4jdjmMfNdI42u5DOI3dOdpF77d/dpVZo8v0mNk8Pbwf6rnQeqwzNEWpBtx2c01v59itoe6BubD1WHkVacHUWL/UJGtYx7HNOwJAB/er6PUfm5MckTgK/V89/dUh1EUpy04J7mInf6E/uWlhZRljAb2LXA7fPwgmY6Cc9UwkyMGxMdEBYpdDp5ZC8TfonHLF4IP0vb8UT6xpNMXdQF5/YbR/FcbXesajVE4VA3/x/a+rka3PFrrajS6P06OSZ8jOs/wD4bZt8PoLP1WDV63R6iYHUSzSta1tGJtX55pcckCyLLjySlyye9lG1q+JHX1Hr8kJc3RHAXs5wtxHv2WcflH6mHWNQP8tv8lx3ElAFbkcbXcb+VHqIdbpGO/xMCYPyn9RvIStHt0wuANynMaSQAEVrztdr/eX1J4N6igeS1gBWZ3rGve4uOrms8/EeVjwDRurAkcLFeiR6dv5Uy5t6kbS3vQ3XRZ6zjEJGPaYTya3+oXjHS3zEB49kOq8jCyG+Lul1x4+30TTeoQ6ii2UFNMuVYm8jyCvBQySQBrmy3227Jv8AtHVadzQ45NBugVnGunuHTRwtc4vAHd3uudqtbUQdiKP6p8dv3WuBD6nLqX1JQaNyK2SptVIfhYaF2Se6Ma6es0epbIWOfWbjTWVSy/lVqj0GQtNi7d3s+FyNBPqYoXOaK+Hd55A9ln12pLwHu2YKaB5Rh1v00rYtLb5HuLxs1p+8+3gLPLqpZCWOLcqpjf2W/wB2sTJQbc51vJAA4FeFSacs1DZYiTXbtynGbS5HtE8Zya4Oya6vb+wuv6Vq5XNzdg6NzcXuB+0BzY7LhveGyuexg3dYK2aTVM00jXDh5+LwtsaXrtLFPqpW6HcWSGjx7LNBqptNQ+IEctI2Wv1At0/TlhYWyZW117ELH6hrnaqYuxAvk1ufmjW541oGvY1rZACJWusBp2s8rNPrNRqH5OkcNuGmv9Vma37vCYBSxa7+fEilUVYe6NA8qjn1sERrZAkcAFmc9Wk582lEG9wt+Y83v3bUtQHelFGCytOf9NibZorU34OBuqxRBjNuSm4U2yudevx5yKcm3HbwrNlA2a3ZLNk7KUe1oxu03qCTtSFhLEUo/UcP/UqzGv7xOrziV22PDl/wS8jgkItJH2XUr9J5/wCU/wD+VDHJ/wBJ33Ithnj0AeRtZo+Eeq+scjSAY4A20/cqEEctd9yZhz0cJ5B+u7bizsFHTveGh5BI49kpt1s00oTtwrB+nPlc4N34Co6Q9tvbyltpWo39koxftFzyefwVRXTo7fNVdIAaG5VSS7d1V4Cta8+P39NlmfKxsZdbWja1TEVui1pcOAAiG1wsV6ZMQDwqnZXcMe+6U5wHJRmq3Ec6gs8jj2Re6+Cl3a3PLz+/Y24G0HEk7okbKpKXICaToGb2a34CEMeb9+FvAbEMnNBd2HhFrt8fn/tTFrW5ONUlPkz+zwqSyGR1nhRu42CxjtfQgHynMjJG+/1QijINkfF4WoN25ARbjfnzv9f/2Q==",
                "balance": 1500
            },
            {
                "id": 4,
                "name": "Shade",
                "surname": "JuJu",
                "photo_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrawlstars.fandom.com%2Fru%2Fwiki%2F%25D0%2594%25D0%25B6%25D1%2583%25D0%25B4%25D0%25B6%25D1%2583&psig=AOvVaw0IeJXVHDVeT7Ow9eEddsKp&ust=1731249590618000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC6iLm9z4kDFQAAAAAdAAAAABAE" ,
                "balance": 1400
            },
            {
                "id":5,
                "name":"beler",
                "surname":"meler",
                "photo_url":"https://raw.githubus...",
                "balance": 1488.88
            },
            {
                "id":6,
                "name":"Adolf",
                "surname":"loxovich",
                "photo_url":"https://raw.githubus...",
                "balance": 1488
            }
        ]
    }
    `

    let jsonObj = JSON.parse(json); 

    jsonObj.users.forEach(user => {
        $('body').append(`
            <div style="border: 2px solid black; margin: 10px; padding: 10px;">
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Surname:</strong> ${user.surname}</p>
                <p><strong>Balance:</strong> $${user.balance.toFixed(2)}</p>
                <img src="${user.photo_url}" alt="${user.name}">
            </div>
        `);
    });
});