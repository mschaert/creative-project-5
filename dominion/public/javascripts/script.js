$(document).ready(function() {
    // Add all cards to the DB
    // addCards();

    $("#button").click(function() {
        $.getJSON('cards', function(data) {
            var cards = JSON.parse(data);
            $(cards).each(function(index, card) {
                $("#" + (index + 1)).attr("src", card["image"]);
            });
        });
    });

    $(".picture").click(function() {
        var currentCard = this;

        $.getJSON('cards/1', function(data) {
            var card = JSON.parse(data);
            $(currentCard).attr("src", card[0]["image"]);
        });
    });

    $(".card").mouseover(function() {
        $(this).css({
            "opacity": ".7",
            "cursor": "pointer"
        });
        $("#leftText").html("<br><br><h4>Click to swap out card</h4><br><br>")

    });

    $(".card").mouseout(function() {
        $(this).css("opacity", "1");
        $("#leftText").html("<br><h4>Create a new randomized deck for your next Dominion game!</h4><p><i>&nbsp&nbspClick to make modifications </i><br></p>")
    });

    $("#button").mouseover(function() {
        $("#leftText").html("<br><br><h4>Replace all cards</h4><br><br>")
    });

    $("#button").mouseout(function() {
        $("#leftText").html("<br><h4>Create a new randomized deck for your next Dominion game!</h4><p><i>&nbsp&nbspClick to make modifications </i><br></p>")
    });

});

function addCards() {
    var cards = [

        //
        // Dominion (Base Set)
        //

        [{
            "name": "Cellar",
            "set": "Dominion (Base Set)",
            "cost": 2,
            "types": ["action"],
            "image": "images/Cellar.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Chapel",
            "set": "Dominion (Base Set)",
            "cost": 2,
            "types": ["action"],
            "image": "images/Chapel.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Moat",
            "set": "Dominion (Base Set)",
            "cost": 2,
            "types": ["action", "reaction"],
            "image": "images/Moat.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Chancellor",
            "set": "Dominion (Base Set)",
            "cost": 3,
            "types": ["action"],
            "image": "images/Chancellor.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Village",
            "set": "Dominion (Base Set)",
            "cost": 3,
            "types": ["action"],
            "image": "images/Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Woodcutter",
            "set": "Dominion (Base Set)",
            "cost": 3,
            "types": ["action"],
            "image": "images/Woodcutter.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Workshop",
            "set": "Dominion (Base Set)",
            "cost": 3,
            "types": ["action"],
            "image": "images/Workshop.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bureaucrat",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Bureaucrat.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Feast",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action"],
            "image": "images/Feast.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Gardens",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["victory"],
            "image": "images/Gardens.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Militia",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Militia.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Moneylender",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action"],
            "image": "images/Moneylender.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Remodel",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action"],
            "image": "images/Remodel.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Smithy",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action"],
            "image": "images/Smithy.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Spy",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Spy.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Thief",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Thief.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Throne Room",
            "set": "Dominion (Base Set)",
            "cost": 4,
            "types": ["action"],
            "image": "images/Throne_Room.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Council Room",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Council_Room.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Festival",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Festival.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": true
        }],
        [{
            "name": "Laboratory",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Laboratory.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Library",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Library.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Market",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Market.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Mine",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action"],
            "image": "images/Mine.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Witch",
            "set": "Dominion (Base Set)",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Witch.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Adventurer",
            "set": "Dominion (Base Set)",
            "cost": 6,
            "types": ["action"],
            "image": "images/Adventurer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Intrigue
            //

            {
                "name": "Courtyard",
                "set": "Intrigue",
                "cost": 2,
                "types": ["action"],
                "image": "images/Courtyard.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "Pawn",
            "set": "Intrigue",
            "cost": 2,
            "types": ["action"],
            "image": "images/Pawn.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Secret Chamber",
            "set": "Intrigue",
            "cost": 2,
            "types": ["action", "reaction"],
            "image": "images/Secret_Chamber.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Great Hall",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action", "victory"],
            "image": "images/Great_Hall.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Masquerade",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action"],
            "image": "images/Masquerade.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Shanty Town",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action"],
            "image": "images/Shanty_Town.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Steward",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action"],
            "image": "images/Steward.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Swindler",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action", "attack"],
            "image": "images/Swindler.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Wishing Well",
            "set": "Intrigue",
            "cost": 3,
            "types": ["action"],
            "image": "images/Wishing_Well.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Baron",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Baron.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Bridge",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Bridge.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Conspirator",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Conspirator.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Coppersmith",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Coppersmith.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Ironworks",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Ironworks.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Mining Village",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Mining_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Scout",
            "set": "Intrigue",
            "cost": 4,
            "types": ["action"],
            "image": "images/Scout.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Duke",
            "set": "Intrigue",
            "cost": 5,
            "types": ["victory"],
            "image": "images/Duke.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Minion",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Minion.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Saboteur",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Saboteur.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Torturer",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Torturer.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Trading Post",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action"],
            "image": "images/Trading_Post.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Tribute",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action"],
            "image": "images/Tribute.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Upgrade",
            "set": "Intrigue",
            "cost": 5,
            "types": ["action"],
            "image": "images/Upgrade.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Harem",
            "set": "Intrigue",
            "cost": 6,
            "types": ["treasure", "victory"],
            "image": "images/Harem.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Nobles",
            "set": "Intrigue",
            "cost": 6,
            "types": ["action", "victory"],
            "image": "images/Nobles.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [

            //
            // Seaside
            //

            {
                "name": "Embargo",
                "set": "Seaside",
                "cost": 2,
                "types": ["action"],
                "image": "images/Embargo.jpg",
                "uses_curses": true,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "Haven",
            "set": "Seaside",
            "cost": 2,
            "types": ["action", "duration"],
            "image": "images/Haven.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Lighthouse",
            "set": "Seaside",
            "cost": 2,
            "types": ["action", "duration"],
            "image": "images/Lighthouse.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Native Village",
            "set": "Seaside",
            "cost": 2,
            "types": ["action"],
            "image": "images/Native_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Pearl Diver",
            "set": "Seaside",
            "cost": 2,
            "types": ["action"],
            "image": "images/Pearl_Diver.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Ambassador",
            "set": "Seaside",
            "cost": 3,
            "types": ["action", "attack"],
            "image": "images/Ambassador.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Fishing Village",
            "set": "Seaside",
            "cost": 3,
            "types": ["action", "duration"],
            "image": "images/Fishing_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Lookout",
            "set": "Seaside",
            "cost": 3,
            "types": ["action"],
            "image": "images/Lookout.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Smugglers",
            "set": "Seaside",
            "cost": 3,
            "types": ["action"],
            "image": "images/Smugglers.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Warehouse",
            "set": "Seaside",
            "cost": 3,
            "types": ["action"],
            "image": "images/Warehouse.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Caravan",
            "set": "Seaside",
            "cost": 4,
            "types": ["action", "duration"],
            "image": "images/Caravan.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Cutpurse",
            "set": "Seaside",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Cutpurse.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Island",
            "set": "Seaside",
            "cost": 4,
            "types": ["action", "victory"],
            "image": "images/Island.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Navigator",
            "set": "Seaside",
            "cost": 4,
            "types": ["action"],
            "image": "images/Navigator.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Pirate Ship",
            "set": "Seaside",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Pirate_Ship.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Salvager",
            "set": "Seaside",
            "cost": 4,
            "types": ["action"],
            "image": "images/Salvager.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Sea Hag",
            "set": "Seaside",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Sea_Hag.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Treasure Map",
            "set": "Seaside",
            "cost": 4,
            "types": ["action"],
            "image": "images/Treasure_Map.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bazaar",
            "set": "Seaside",
            "cost": 5,
            "types": ["action"],
            "image": "images/Bazaar.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Explorer",
            "set": "Seaside",
            "cost": 5,
            "types": ["action"],
            "image": "images/Explorer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Ghost Ship",
            "set": "Seaside",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Ghost_Ship.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Merchant Ship",
            "set": "Seaside",
            "cost": 5,
            "types": ["action", "duration"],
            "image": "images/Merchant_Ship.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Outpost",
            "set": "Seaside",
            "cost": 5,
            "types": ["action", "duration"],
            "image": "images/Outpost.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Tactician",
            "set": "Seaside",
            "cost": 5,
            "types": ["action", "duration"],
            "image": "images/Tactician.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": true
        }],
        [{
            "name": "Treasury",
            "set": "Seaside",
            "cost": 5,
            "types": ["action"],
            "image": "images/Treasury.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Wharf",
            "set": "Seaside",
            "cost": 5,
            "types": ["action", "duration"],
            "image": "images/Wharf.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [

            //
            // Alchemy
            //

            {
                "name": "Transmute",
                "set": "Alchemy",
                "cost": 0.5,
                "types": ["action"],
                "image": "images/Transmute.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "Vineyard",
            "set": "Alchemy",
            "cost": 0.5,
            "types": ["victory"],
            "image": "images/Vineyard.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Herbalist",
            "set": "Alchemy",
            "cost": 2,
            "types": ["action"],
            "image": "images/Herbalist.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Apothecary",
            "set": "Alchemy",
            "cost": 2.5,
            "types": ["action"],
            "image": "images/Apothecary.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            {
                "name": "Scrying Pool",
                "set": "Alchemy",
                "cost": 2.5,
                "types": ["action", "attack"],
                "image": "images/Scrying_Pool.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "University",
            "set": "Alchemy",
            "cost": 2.5,
            "types": ["action"],
            "image": "images/University.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Alchemist",
            "set": "Alchemy",
            "cost": 3.5,
            "types": ["action"],
            "image": "images/Alchemist.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Familiar",
            "set": "Alchemy",
            "cost": 3.5,
            "types": ["action", "attack"],
            "image": "images/Familiar.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Philosopher's Stone",
            "set": "Alchemy",
            "cost": 3.5,
            "types": ["treasure"],
            "image": "images/Philosophers_Stone.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Golem",
            "set": "Alchemy",
            "cost": 4.5,
            "types": ["action"],
            "image": "images/Golem.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Apprentice",
            "set": "Alchemy",
            "cost": 5,
            "types": ["action"],
            "image": "images/Apprentice.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Possession",
            "set": "Alchemy",
            "cost": 6.5,
            "types": ["action"],
            "image": "images/Possession.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Prosperity
            //

            {
                "name": "Loan",
                "set": "Prosperity",
                "cost": 3,
                "types": ["treasure"],
                "image": "images/Loan.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "Trade Route",
            "set": "Prosperity",
            "cost": 3,
            "types": ["action"],
            "image": "images/Trade_Route.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Watchtower",
            "set": "Prosperity",
            "cost": 3,
            "types": ["action", "reaction"],
            "image": "images/Watchtower.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bishop",
            "set": "Prosperity",
            "cost": 4,
            "types": ["action"],
            "image": "images/Bishop.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Monument",
            "set": "Prosperity",
            "cost": 4,
            "types": ["action"],
            "image": "images/Monument.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Quarry",
            "set": "Prosperity",
            "cost": 4,
            "types": ["treasure"],
            "image": "images/Quarry.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Talisman",
            "set": "Prosperity",
            "cost": 4,
            "types": ["treasure"],
            "image": "images/Talisman.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Worker's Village",
            "set": "Prosperity",
            "cost": 4,
            "types": ["action"],
            "image": "images/Workers_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": true
        }],
        [{
            "name": "City",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action"],
            "image": "images/City.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": true
        }],
        [{
            "name": "Contraband",
            "set": "Prosperity",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Contraband.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Counting House",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action"],
            "image": "images/Counting_House.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Mint",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action"],
            "image": "images/Mint.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Mountebank",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Mountebank.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Rabble",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Rabble.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Royal Seal",
            "set": "Prosperity",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Royal_Seal.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Vault",
            "set": "Prosperity",
            "cost": 5,
            "types": ["action"],
            "image": "images/Vault.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Venture",
            "set": "Prosperity",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Venture.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Goons",
            "set": "Prosperity",
            "cost": 6,
            "types": ["action", "attack"],
            "image": "images/Goons.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Grand Market",
            "set": "Prosperity",
            "cost": 6,
            "types": ["action"],
            "image": "images/Grand_Market.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Hoard",
            "set": "Prosperity",
            "cost": 6,
            "types": ["treasure"],
            "image": "images/Hoard.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bank",
            "set": "Prosperity",
            "cost": 7,
            "types": ["treasure"],
            "image": "images/Bank.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Expand",
            "set": "Prosperity",
            "cost": 7,
            "types": ["action"],
            "image": "images/Expand.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Forge",
            "set": "Prosperity",
            "cost": 7,
            "types": ["action"],
            "image": "images/Forge.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "King's Court",
            "set": "Prosperity",
            "cost": 7,
            "types": ["action"],
            "image": "images/Kings_Court.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Peddler",
            "set": "Prosperity",
            "cost": 8,
            "types": ["action"],
            "image": "images/Peddler.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Cornucopia
            //

            {
                "name": "Hamlet",
                "set": "Cornucopia",
                "cost": 2,
                "types": ["action"],
                "image": "images/Hamlet.jpg",
                "uses_curses": false,
                "is_fork": true,
                "adds_buys": true
            }
        ],
        [{
            "name": "Fortune Teller",
            "set": "Cornucopia",
            "cost": 3,
            "types": ["action", "attack"],
            "image": "images/Fortune_Teller.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Menagerie",
            "set": "Cornucopia",
            "cost": 3,
            "types": ["action"],
            "image": "images/Menagerie.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Farming Village",
            "set": "Cornucopia",
            "cost": 4,
            "types": ["action"],
            "image": "images/Farming_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Horse Traders",
            "set": "Cornucopia",
            "cost": 4,
            "types": ["action", "reaction"],
            "image": "images/Horse_Traders.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Remake",
            "set": "Cornucopia",
            "cost": 4,
            "types": ["action"],
            "image": "images/Remake.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Tournament",
            "set": "Cornucopia",
            "cost": 4,
            "types": ["action"],
            "image": "images/Tournament.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Young Witch",
            "set": "Cornucopia",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Young_Witch.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Harvest",
            "set": "Cornucopia",
            "cost": 5,
            "types": ["action"],
            "image": "images/Harvest.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Horn of Plenty",
            "set": "Cornucopia",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Horn_of_Plenty.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Hunting Party",
            "set": "Cornucopia",
            "cost": 5,
            "types": ["action"],
            "image": "images/Hunting_Party.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Jester",
            "set": "Cornucopia",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Jester.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Fairgrounds",
            "set": "Cornucopia",
            "cost": 6,
            "types": ["victory"],
            "image": "images/Fairgrounds.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Hinterlands
            //

            {
                "name": "Crossroads",
                "set": "Hinterlands",
                "cost": 2,
                "types": ["action"],
                "image": "images/Crossroads.jpg",
                "uses_curses": false,
                "is_fork": true,
                "adds_buys": false
            }
        ],
        [{
            "name": "Duchess",
            "set": "Hinterlands",
            "cost": 2,
            "types": ["victory"],
            "image": "images/Duchess.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Fool's Gold",
            "set": "Hinterlands",
            "cost": 2,
            "types": ["reaction", "treasure"],
            "image": "images/Fools_Gold.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Develop",
            "set": "Hinterlands",
            "cost": 3,
            "types": ["action"],
            "image": "images/Develop.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Oasis",
            "set": "Hinterlands",
            "cost": 3,
            "types": ["action"],
            "image": "images/Oasis.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Oracle",
            "set": "Hinterlands",
            "cost": 3,
            "types": ["action", "attack"],
            "image": "images/Oracle.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Scheme",
            "set": "Hinterlands",
            "cost": 3,
            "types": ["action"],
            "image": "images/Scheme.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Tunnel",
            "set": "Hinterlands",
            "cost": 3,
            "types": ["reaction", "victory"],
            "image": "images/Tunnel.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Jack of all Trades",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["action"],
            "image": "images/Jack_of_all_Trades.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Noble Brigand",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Noble_Brigand.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Nomad Camp",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["action"],
            "image": "images/Nomad_Camp.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Silk Road",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["victory"],
            "image": "images/Silk_Road.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Spice Merchant",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["action"],
            "image": "images/Spice_Merchant.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Trader",
            "set": "Hinterlands",
            "cost": 4,
            "types": ["action", "reaction"],
            "image": "images/Trader.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Cache",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Cache.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Cartographer",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Cartographer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Embassy",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Embassy.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Haggler",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Haggler.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Highway",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Highway.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Ill-Gotten Gains",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Ill_Gotten_Gains.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Inn",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Inn.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Mandarin",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Mandarin.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Margrave",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Margrave.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Stables",
            "set": "Hinterlands",
            "cost": 5,
            "types": ["action"],
            "image": "images/Stables.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Border Village",
            "set": "Hinterlands",
            "cost": 6,
            "types": ["action"],
            "image": "images/Border_Village.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Farmland",
            "set": "Hinterlands",
            "cost": 6,
            "types": ["victory"],
            "image": "images/Farmland.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Dark Ages
            //

            {
                "name": "Poor House",
                "set": "Dark Ages",
                "cost": 1,
                "types": ["action"],
                "image": "images/Poor_House.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": false
            }
        ],
        [{
            "name": "Beggar",
            "set": "Dark Ages",
            "cost": 2,
            "types": ["action", "reaction"],
            "image": "images/Beggar.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Squire",
            "set": "Dark Ages",
            "cost": 2,
            "types": ["action"],
            "image": "images/Squire.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": true
        }],
        [{
            "name": "Vagrant",
            "set": "Dark Ages",
            "cost": 2,
            "types": ["action"],
            "image": "images/Vagrant.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Forager",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action"],
            "image": "images/Forager.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Hermit",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action"],
            "image": "images/Hermit.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Market Square",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action", "reaction"],
            "image": "images/Market_Square.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Sage",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action"],
            "image": "images/Sage.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Storeroom",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action"],
            "image": "images/Storeroom.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Urchin",
            "set": "Dark Ages",
            "cost": 3,
            "types": ["action", "attack"],
            "image": "images/Urchin.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Armory",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Armory.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Death Cart",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action", "looter"],
            "image": "images/Death_Cart.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Feodum",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["victory"],
            "image": "images/Feodum.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Fortress",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Fortress.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Ironmonger",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Ironmonger.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Marauder",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action", "attack", "looter"],
            "image": "images/Marauder.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Procession",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Procession.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Rats",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Rats.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Scavenger",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Scavenger.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Wandering Minstrel",
            "set": "Dark Ages",
            "cost": 4,
            "types": ["action"],
            "image": "images/Wandering_Minstrel.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Band of Misfits",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Band_of_Misfits.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bandit Camp",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Bandit_Camp.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Catacombs",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Catacombs.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Count",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Count.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Counterfeit",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Counterfeit.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Cultist",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action", "attack", "looter"],
            "image": "images/Cultist.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Graverobber",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Graverobber.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Junk Dealer",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Junk_Dealer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Knights",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Knights.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Mystic",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Mystic.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Pillage",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Pillage.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Rebuild",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action"],
            "image": "images/Rebuild.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Rogue",
            "set": "Dark Ages",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Rogue.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Altar",
            "set": "Dark Ages",
            "cost": 6,
            "types": ["action"],
            "image": "images/Altar.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Hunting Grounds",
            "set": "Dark Ages",
            "cost": 6,
            "types": ["action"],
            "image": "images/Hunting_Grounds.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Guilds
            //

            {
                "name": "Candlestick Maker",
                "set": "Guilds",
                "cost": 2,
                "types": ["action"],
                "image": "images/Candlestick_Maker.jpg",
                "uses_curses": false,
                "is_fork": false,
                "adds_buys": true
            }
        ],
        [{
            "name": "Stonemason",
            "set": "Guilds",
            "cost": 2,
            "types": ["action"],
            "image": "images/Stonemason.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Doctor",
            "set": "Guilds",
            "cost": 3,
            "types": ["action"],
            "image": "images/Doctor.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Masterpiece",
            "set": "Guilds",
            "cost": 3,
            "types": ["treasure"],
            "image": "images/Masterpiece.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Advisor",
            "set": "Guilds",
            "cost": 4,
            "types": ["action"],
            "image": "images/Advisor.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Plaza",
            "set": "Guilds",
            "cost": 4,
            "types": ["action"],
            "image": "images/Plaza.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Taxman",
            "set": "Guilds",
            "cost": 4,
            "types": ["action", "attack"],
            "image": "images/Taxman.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Herald",
            "set": "Guilds",
            "cost": 4,
            "types": ["action"],
            "image": "images/Herald.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Baker",
            "set": "Guilds",
            "cost": 5,
            "types": ["action"],
            "image": "images/Baker.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Butcher",
            "set": "Guilds",
            "cost": 5,
            "types": ["action"],
            "image": "images/Butcher.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Journeyman",
            "set": "Guilds",
            "cost": 5,
            "types": ["action"],
            "image": "images/Journeyman.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Merchant Guild",
            "set": "Guilds",
            "cost": 5,
            "types": ["action"],
            "image": "images/Merchant_Guild.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Soothsayer",
            "set": "Guilds",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Soothsayer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [

            //
            // Adventures
            //

            {
                "name": "Coin of the Realm",
                "set": "Adventures",
                "cost": 2,
                "types": ["treasure", "reserve"],
                "image": "images/Coin_of_the_Realm.jpg",
                "uses_curses": false,
                "is_fork": true,
                "adds_buys": false
            }
        ],
        [{
            "name": "Page",
            "set": "Adventures",
            "cost": 2,
            "types": ["action", "traveller"],
            "image": "images/Page.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Peasant",
            "set": "Adventures",
            "cost": 2,
            "types": ["action", "traveller"],
            "image": "images/Peasant.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Ratcatcher",
            "set": "Adventures",
            "cost": 2,
            "types": ["action", "reserve"],
            "image": "images/Ratcatcher.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Raze",
            "set": "Adventures",
            "cost": 2,
            "types": ["action"],
            "image": "images/Raze.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Amulet",
            "set": "Adventures",
            "cost": 3,
            "types": ["action", "duration"],
            "image": "images/Amulet.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Caravan Guard",
            "set": "Adventures",
            "cost": 3,
            "types": ["action", "duration", "reaction"],
            "image": "images/Caravan_Guard.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Dungeon",
            "set": "Adventures",
            "cost": 3,
            "types": ["action", "duration"],
            "image": "images/Dungeon.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Gear",
            "set": "Adventures",
            "cost": 3,
            "types": ["action", "duration"],
            "image": "images/Gear.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Guide",
            "set": "Adventures",
            "cost": 3,
            "types": ["action", "reserve"],
            "image": "images/Guide.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Duplicate",
            "set": "Adventures",
            "cost": 4,
            "types": ["action", "reserve"],
            "image": "images/Duplicate.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Magpie",
            "set": "Adventures",
            "cost": 4,
            "types": ["action"],
            "image": "images/Magpie.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Messenger",
            "set": "Adventures",
            "cost": 4,
            "types": ["action"],
            "image": "images/Messenger.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Miser",
            "set": "Adventures",
            "cost": 4,
            "types": ["action"],
            "image": "images/Miser.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Port",
            "set": "Adventures",
            "cost": 4,
            "types": ["action"],
            "image": "images/Port.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Ranger",
            "set": "Adventures",
            "cost": 4,
            "types": ["action"],
            "image": "images/Ranger.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Transmogrify",
            "set": "Adventures",
            "cost": 4,
            "types": ["action", "reserve"],
            "image": "images/Transmogrify.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Artificer",
            "set": "Adventures",
            "cost": 5,
            "types": ["action"],
            "image": "images/Artificer.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Bridge Troll",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "attack", "duration"],
            "image": "images/Bridge_Troll.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Distant Lands",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "reserve", "victory"],
            "image": "images/Distant_Lands.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Giant",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "attack"],
            "image": "images/Giant.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Haunted Woods",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "attack", "duration"],
            "image": "images/Haunted_Woods.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Lost City",
            "set": "Adventures",
            "cost": 5,
            "types": ["action"],
            "image": "images/Lost_City.jpg",
            "uses_curses": false,
            "is_fork": true,
            "adds_buys": false
        }],
        [{
            "name": "Relic",
            "set": "Adventures",
            "cost": 5,
            "types": ["treasure", "attack"],
            "image": "images/Relic.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Royal Carriage",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "reserve"],
            "image": "images/Royal_Carriage.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Storyteller",
            "set": "Adventures",
            "cost": 5,
            "types": ["action"],
            "image": "images/Storyteller.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Swamp Hag",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "attack", "duration"],
            "image": "images/Swamp_Hag.jpg",
            "uses_curses": true,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Treasure Trove",
            "set": "Adventures",
            "cost": 5,
            "types": ["treasure"],
            "image": "images/Treasure_Trove.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }],
        [{
            "name": "Wine Merchant",
            "set": "Adventures",
            "cost": 5,
            "types": ["action", "reserve"],
            "image": "images/Wine_Merchant.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": true
        }],
        [{
            "name": "Hireling",
            "set": "Adventures",
            "cost": 6,
            "types": ["action", "duration"],
            "image": "images/Hireling.jpg",
            "uses_curses": false,
            "is_fork": false,
            "adds_buys": false
        }]
    ];

    $(cards).each(function(index, card) {
        var url = "cards";
        $.ajax({
            url: url,
            type: "POST",
            data: JSON.stringify(card[0]),
            contentType: "application/json; charset=utf-8",
            success: function(data, testStatus) {
                console.log("Cards added");
            }
        });
    });
}
