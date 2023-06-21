USE [GHospital]
GO
create procedure Insert_Vaccination
		(@patient_id varchar(50)
           ,@influenza int
           ,@influenza_verification int
           ,@covid_vaccine int
           ,@doses int
           ,@covid_verification int
           ,@covid_test int
           ,@covid_results int
           ,@patient_specimen int
           ,@swab_collection int
           ,@collection_date date
           ,@createdby char(50)
           ,@datecreated datetime)
		   as
INSERT INTO [dbo].[Vaccination]
           ([patient_id]
           ,[influenza]
           ,[influenza_verification]
           ,[covid_vaccine]
           ,[doses]
           ,[covid_verification]
           ,[covid_test]
           ,[covid_results]
           ,[patient_specimen]
           ,[swab_collection]
           ,[collection_date]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id
           ,@influenza
           ,@influenza_verification
           ,@covid_vaccine
           ,@doses
           ,@covid_verification
           ,@covid_test
           ,@covid_results
           ,@patient_specimen
           ,@swab_collection
           ,@collection_date
           ,@createdby
           ,@datecreated)
GO


