# Migration `20200715102259-update-trip`

This migration has been generated by Johnny at 7/15/2020, 10:22:59 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Trip" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"launchId" INTEGER NOT NULL,
"userId" INTEGER NOT NULL,FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

INSERT INTO "new_Trip" ("id", "launchId", "userId") SELECT "id", "launchId", "userId" FROM "Trip"

PRAGMA foreign_keys=off;
DROP TABLE "Trip";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Trip" RENAME TO "Trip";

CREATE UNIQUE INDEX "Trip.launchId_userId" ON "Trip"("launchId","userId")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200714163138-update-trip..20200715102259-update-trip
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -16,9 +16,9 @@
 model Trip {
   id       Int    @id @default(autoincrement())
   launchId Int
-  user   User? @relation(fields: [userId], references: [id])
-  userId Int?
+  user   User @relation(fields: [userId], references: [id])
+  userId Int
   @@unique([launchId, userId])
 }
```


